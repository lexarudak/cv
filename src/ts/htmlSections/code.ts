const code = `private static async getItem(path: Path, id: number): Promise&lt;GetResponse&gt; {
  const res = await fetch(this.makeUrl(path, id), {
    method: Method.get,
  });
  const { status } = res;
  const data: WinnerResponse & CarResponse = await res.json();
  return { status, data };
}`;
export default code;
