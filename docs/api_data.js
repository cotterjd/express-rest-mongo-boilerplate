define({ "api": [
  {
    "type": "get",
    "url": "/:name",
    "title": "",
    "name": "getExample",
    "group": "example",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http:localhost:3040/jon?foo=bar",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>param sent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>query object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"param\": \"jon\",\n  \"query\": { \"foo\": \"bar\" } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs.js",
    "groupTitle": "example"
  },
  {
    "type": "post",
    "url": "/",
    "title": "",
    "name": "postExample",
    "group": "example",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl httphttp://localhost:3040Type: application/json\" -d \"{\\-X POST -H \"Content-Type: application/json\" -d \"{\\\"name\\\": \\\"jon\\\" }\" http://localhost:3040",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"name\": \"jon\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs.js",
    "groupTitle": "example"
  }
] });
