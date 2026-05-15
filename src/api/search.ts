export async function getSearch(query: string): Promise<unknown> {
  const response = await fetch(
    `/api/naver/v1/search/blog?query=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error(`검색 API 요청 실패: ${response.status}`);
  }

  return response.json();
}
