export const fetchBenches = (filters, success) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filters,
    success,
    error: () => console.log('Error')
  });
};
