let url = "http://10.10.1.212:9200/logstash-*/_search"
let data = JSON.stringify({"query":{"match_phrase":{"event_type":"ip_access"}}})
let contentType = "application/json"
let response = httpPost(url, data, contentType)
console.log(response.data)