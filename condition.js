let url = "http://10.10.1.212:9200/logstash-*/_search"
let data =   {"query": {
    "bool": {
      "must": [],
      "filter": [
        {
          "match_all": {}
        },
        {
          "match_phrase": {
            "event_type": "ip_access"
          }
        },
        {
          "match_phrase": {
            "distinguished_name": claims.user.ag.distinguishedName
          }
        },
        {
          "range": {
            "@timestamp": {
              "gte": claims.system.connectTime,
              "lte": "2023-07-12T13:27:32.879Z",
              "format": "strict_date_optional_time"
            }
          }
        }
      ],
      "should": [],
      "must_not": []
    }
  }
}
let contentType = "application/json"
let response = httpPost(url, JSON.stringify(data), contentType)
console.log(response.data)