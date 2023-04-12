## Introduction

The code provided above contains two functions that enable payment and request of payment through the Shinies payment gateway. This documentation provides an overview of the code, including the function names, parameters, and return values. Additionally, it explains the purpose and usage of the code and provides examples to illustrate the same.

## Purpose

The purpose of this code is to provide a simple and convenient way for developers to integrate Shinies payment gateway into their web applications. The payment gateway is designed to facilitate the payment and request of payment between customers and receivers securely.

## Usage

The code contains two functions that enable payment and request of payment. Both functions use the fetch API to make requests to the Shinies payment gateway. 

The payment function `pay()` requires four parameters: 

1. `Customer`: The ID of the customer making the payment
2. `Key`: The API key for the customer making the payment
3. `Receiver`: The ID of the receiver who will receive the payment
4. `Amount`: The amount to be paid
5. `App`: The name of your app

The request function `request()` also requires four parameters:

1. `Customer`: The ID of the customer requesting the payment
2. `Key`: The API key for the customer requesting the payment
3. `Receiver`: The ID of the receiver from whom the payment is being requested
4. `Amount`: The amount to be requested
5. `App`: The name of your app

Both functions return a plain-text success or error message for the customer.

## Examples

Below are examples of how to use the `pay()` and `request()` functions:

### Payment Example
```javascript
let AppID = 'ShiniesJS';
let CustomerID = 'customer123';
let APIKey = 'apikey123';
let ReceiverID = 'receiver456';
let Amount = '50.00';

pay(CustomerID, APIKey, ReceiverID, Amount, AppID);
```

### Request Example
```javascript
let AppID = 'ShiniesJS';
let CustomerID = 'customer123';
let APIKey = 'apikey123';
let ReceiverID = 'receiver456';
let Amount = '50.00';

request(Customer, Key, Receiver, Amount, AppID)
```