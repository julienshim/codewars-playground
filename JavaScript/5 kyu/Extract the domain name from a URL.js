function domainName(url){
  //your code here
  return url.split(/https?:(?:\/\/)|(?:www\.)?/gi).join("").trim().split('.')[0]
}
