Phone.$inject = ["$resource"];
export function Phone($resource) {
  return $resource(
    "phones/:phoneId.json",
    {},
    {
      query: {
        method: "GET",
        params: { phoneId: "phones" },
        isArray: true,
      },
    }
  );
}
