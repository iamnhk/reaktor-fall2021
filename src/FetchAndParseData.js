function fetchData(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}
