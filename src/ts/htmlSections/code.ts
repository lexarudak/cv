const code = `private static async getItem(path: Path, id: number): Promise<GetResponse> {
  const res = await fetch(this.makeUrl(path, id).toString(), {
    method: Method.get,
  });
  const { status } = res;
  const data: WinnerResponse & CarResponse = await res.json();
  return { status, data };
}`;
export default code;
