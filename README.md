# Here I write all important TypeScript file to practice

Fist we need setings TS. Install dependencies:

```json
  "devDependencies": {
    "nodemon": "^2.0.6",
    "sucrase": "^3.16.0",
    "typescript": "^4.1.2"
  }
```

Create a file _nodemon.json_:

```json
  {
    "watch": ["src"],
    "ext": "ts",
    "execMap": {
      "ts": "sucrase-node src/index.ts"
    } 
  }
```

Now you can run nodemon, and node run TS.

> folder -> src/*.ts