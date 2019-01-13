# webpack-html-entrypoint

> **Disclaimer**: this repo is not named to reflect what it is meant to do, read along at your own risk.

> **Another disclaimer**: Before continuing anymore, you may also want to consider reading [webpack/webpack#7589](https://github.com/webpack/webpack/issues/7589).

[extract-loader](https://github.com/peerigon/extract-loader) lets you extract CSS and HTML, have them as (almost) first class modules in Webpack. But it does [not support](https://github.com/peerigon/extract-loader/issues/6) extracting JS , and has no intentions of supporting anytime soon.

This repo is structured in such way to support JS extract (beware, only to some extent) using extract-loader and some other loaders. And as such it does come with some pitfalls.

## Limitations

- As JS extraction is not supported by extract-loader, the type of JS that you can write is affected
  - Like ES6 `import`s don't work, they are just left as is

    You may be thing that what use is it if we cannot bundle JS code using a module bundler, but this is a limitation if you only try to extact from HTML script tags, the JS entrypoints still work.

- Some junk files at the root of output directory are generated, which you should not be worried about as they are not referenced by any file in the project

- No sourcemap support for extracted JS (beause of the junk files)

## Why would you still want to do this

- But is still useful if all of yor JS is in a single file 🤷‍♂️
- Still way faster than [Parcel](https://github.com/parcel-bundler/parcel)

## Conclusion

Use this if you want to, you/I may end up using this pattern at some point, but don't @ me.

... blah, blah, blah ...

**Important**: If you really want first class module support for HTML and CSS in Webpack, take a look at [webpack/webpack#6447](https://github.com/webpack/webpack/pull/6447), [webpack/webpack#6448](https://github.com/webpack/webpack/pull/6448), where [michael-ciniawsky](https://github.com/michael-ciniawsky) has been working on adding support for more than a year now.
