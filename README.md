# How to effectively parse JSON

## Instructions
```javascript
// - First get response in Uint8List to array buffer
const decoder = new TextDecoder("utf-8");

const response = await fetch(url);

// recieves Uint8List
const data = await response.arrayBuffer();

// - Then parse to string 
const textData = decoder.decode(data);

// - Then parse to JSON 
const jsonData = JSON.parse(textData);
```

## Demo: