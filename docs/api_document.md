# Project: ecommerce API Documentation

## Table of Contents
- <a href="#auth">📁 Auth</a>
- <a href="#category">📁 Category</a>
- <a href="#user">📁 User</a>
- <a href="#product">📁 Product</a>
- <a href="#coupon">📁 Coupon</a>
- <a href="#cart">📁 Cart</a>
- <a href="#order">📁 Order</a>
- <a href="#review">📁 Review</a>

---

<h2 id="auth">📁 Collection: auth</h2>

### End-point: register
**Method:** POST  
> ```
> {{base_url}}/auth/register
> ```

#### Request Body (json)
```json
{
    "email": "{{email}}", 
    "password": "{{password}}", 
    "name": "{{name}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "user": {
        "_id": "{{id}}",
        "userName": "{{name}}",
        "email": "{{email}}"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: login
**Method:** POST  
> ```
> {{base_url}}/auth/login
> ```

#### Request Body (json)
```json
{
    "email": "{{email}}", 
    "password": "{{password}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "token": "{{token}}"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ 

### End-point: resetPassword
**Method:** POST  
> ```
> {{base_url}}/auth/resetPassword
> ```

#### Request Body (json)
```json
{
    "email": "{{email}}", 
    "password": "{{password}}",
    "code": "{{code}}"
}
```

#### Expected Response
```json
{
    "message": "success"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: sendCode
**Method:** POST  
> ```
> {{base_url}}/auth/sendCode
> ```

#### Request Body (json)
```json
{
    "email": "{{email}}"
}
```

#### Expected Response
```json
{
    "message": "success"
}
```

---

<h2 id="category">📁 Collection: category</h2>

### End-point: create
**Method:** POST  
> ```
> {{base_url}}/category/create
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "name": "{{name}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "category": {
        "_id": "{{id}}",
        "name": "{{name}}"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getAll
**Method:** GET  
> ```
> {{base_url}}/category/getAll
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "categories": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getActive
**Method:** GET  
> ```
> {{base_url}}/category/getActive
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "categories": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: update
**Method:** PUT  
> ```
> {{base_url}}/category/update/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "name": "{{name}}",
    "status": "{{status}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "category": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: remove
**Method:** DELETE  
> ```
> {{base_url}}/category/remove/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getDetails
**Method:** GET  
> ```
> {{base_url}}/category/getDetails/{{id}}
> ```

#### Expected Response
```json
{
    "message": "success",
    "category": {}
}
```

---

<h2 id="user">📁 Collection: user</h2>

### End-point: getAll_find
**Method:** GET  
> ```
> {{base_url}}/user/getAll_find
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "users": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getAll_findByConfirmEmail
**Method:** GET  
> ```
> {{base_url}}/user/getAll_findByConfirmEmail
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "users": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getUser_findOne / getUser_findById
**Method:** GET  
> ```
> {{base_url}}/user/getUser_findOne/{{id}}
> ```
*or*
> ```
> {{base_url}}/user/getUser_findById/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "user": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: deleteUser (all cases)
**Method:** DELETE  
> ```
> {{base_url}}/user/deleteUser/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: updateUser (all cases)
**Method:** PATCH  
> ```
> {{base_url}}/user/updateUser/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "email": "{{email}}",
    "userName": "{{name}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "user": {}
}
```

---

<h2 id="product">📁 Collection: product</h2>

### End-point: create
**Method:** POST  
> ```
> {{base_url}}/product/create
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (form-data)
| Param | Type | Required | Description |
| --- | --- | --- | --- |
| name | text | Yes | Product name |
| categoryId | text | Yes | ID of category |
| mainImage | file | Yes | Main image file |
| subImages | file | No | Additional images |
| price | text | Yes | Positive number |
| description | text | No | Details about product |
| discount | text | No | E.g. 50 (max 100) |
| stock | text | No | Number in stock |

#### Expected Response
```json
{
    "message": "success",
    "product": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: remove
**Method:** DELETE  
> ```
> {{base_url}}/product/remove/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getDetails
**Method:** GET  
> ```
> {{base_url}}/product/getDetails/{{id}}
> ```

#### Expected Response
```json
{
    "message": "success",
    "product": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getAll / getActive
**Method:** GET  
> ```
> {{base_url}}/product/getAll
> ```

#### Expected Response
```json
{
    "message": "success",
    "products": []
}
```

---

<h2 id="coupon">📁 Collection: coupon</h2>

### End-point: create
**Method:** POST  
> ```
> {{base_url}}/coupon/create
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "name": "{{name}}",
    "amount": {{amount}},
    "expireDate": "{{date}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "coupon": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: getAll
**Method:** GET  
> ```
> {{base_url}}/coupon/getAll
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "coupons": []
}
```

---

<h2 id="cart">📁 Collection: cart</h2>

### End-point: addToCart
**Method:** POST  
> ```
> {{base_url}}/cart/addToCart
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "productId": "{{id}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "cart": {}
}
```

---

<h2 id="order">📁 Collection: order</h2>

### End-point: create
**Method:** POST  
> ```
> {{base_url}}/order/create
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "address": "{{address}}",
    "phoneNumber": "{{phone}}",
    "couponName": "{{name_optional}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "order": {}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: get / get by status
**Method:** GET  
> ```
> {{base_url}}/order/
> ```
> *or*
> ```
> {{base_url}}/order/{{status}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Expected Response
```json
{
    "message": "success",
    "orders": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: changeStatus
**Method:** PATCH  
> ```
> {{base_url}}/order/changeStatus/{{id}}
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "status": "{{status}}"
}
```

#### Expected Response
```json
{
    "message": "success",
    "order": {}
}
```

---

<h2 id="review">📁 Collection: review</h2>

### End-point: create
**Method:** POST  
> ```
> {{base_url}}/product/{{id}}/review/create
> ```

#### Headers
| Content-Type | Value |
| --- | --- |
| token | {{token}} |

#### Request Body (json)
```json
{
    "comment": "{{comment}}",
    "rating": {{rating}}
}
```

#### Expected Response
```json
{
    "message": "success",
    "review": {}
}
```

_________________________________________________
*Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)*
