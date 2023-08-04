# Search parameters with Unicode characters cause Server Actions to fail

To reproduce the problem, follow the procedures below.

1. Clone this repo
2. Run `npm run dev`
3. Visit http://localhost:3000/?q=%E3%81%82%E3%81%82%E3%81%82
4. Click the count up button

## Related Problems

- [[NEXT-1258] Search parameters with Unicode characters cause the fetching of RSC payload to fail #48728](https://github.com/vercel/next.js/issues/48728)
