---
title: API Reference

language_tabs:
  - shell
  - ruby
  - python

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

Welcome to the Radiant-Earth API! You can use our API to access images API endpoints, which can get information on various images in our database.

We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Authentiiamgeion

```ruby
require 'radiant-earth'

api = radiant-earth::APIClient.authorize!('images')
```

```python
import radiant-earth

api = radiant-earth.authorize('images')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: images"
```

radiant-earth uses API keys to allow access to the API. You can register a new radiant-earth API key at our [developer portal](http://example.com/developers).

radiant-earth expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: images`

# radiant-earth

## Get All radiant-earth

```ruby
require 'radiant-earth'

api = radiant-earth::APIClient.authorize!('images')
api.radiant-earth.get
```

```python
import radiant-earth

api = radiant-earth.authorize('images')
api.radiant-earth.get()
```

```shell
curl "http://example.com/api/radiant-earth"
  -H "Authorization: images"
```

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all radiant-earth.

### HTTP Request
`GET http://example.com/radiant-earth`


### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
radiant-earth | false | If set to true, the result will also include iamges.
available | true | If set to false, the result will include radiant-earth that have already been adopted.


## Get a Specific Kitten

```ruby
require 'radiant-earth'

api = radiant-earth::APIClient.authorize!('images')
api.radiant-earth.get(2)
```

```python
import radiant-earth

api = radiant-earth.authorize('images')
api.radiant-earth.get(2)
```

```shell
curl "http://example.com/api/radiant-earth/3"
  -H "Authorization: images"
```

```json
{
  "id": 2,
  "name": "Isis",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

### HTTP Request
`GET https://www.radiant.earth/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the iamge to retrieve
