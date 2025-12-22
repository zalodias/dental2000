import { notion } from '@/notion/client';
import type {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

type SortConfig = {
  property?: string;
  timestamp?: 'created_time' | 'last_edited_time';
  direction: 'ascending' | 'descending';
};

type FilterConfig = {
  property: string;
  status: { equals: string };
};

export async function fetchDatabaseContent(
  id: string,
  options?: {
    sorts?: SortConfig[];
    filter?: FilterConfig;
    page_size?: number;
  },
) {
  const data: any = await notion.dataSources.query({
    data_source_id: id,
    sorts: options?.sorts?.map((sort) => {
      if (sort.property) {
        return { property: sort.property, direction: sort.direction };
      }
      return {
        timestamp: sort.timestamp as 'created_time' | 'last_edited_time',
        direction: sort.direction,
      };
    }),
    filter: options?.filter && {
      property: options.filter.property,
      status: options.filter.status,
    },
    page_size: options?.page_size ?? 100,
  });

  return data.results as PageObjectResponse[];
}

export async function fetchPageContent(
  id: string,
): Promise<PageObjectResponse> {
  const data = await notion.pages.retrieve({ page_id: id });

  return data as PageObjectResponse;
}

type BlockWithChildren = BlockObjectResponse & {
  children?: BlockWithChildren[];
};

export async function fetchBlockContent(
  id: string,
): Promise<BlockWithChildren[]> {
  const { results } = await notion.blocks.children.list({
    block_id: id,
  });

  const blocks = await Promise.all(
    results.map(async (block): Promise<BlockWithChildren> => {
      if ('has_children' in block && block.has_children) {
        const children = await fetchBlockContent(block.id);
        return { ...(block as BlockObjectResponse), children };
      }
      return block as BlockObjectResponse;
    }),
  );

  return blocks as BlockWithChildren[];
}
