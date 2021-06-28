The Algebrite website http://algebrite.org , with docs and sandboxes. For the actual engine plase see https://github.com/davidedc/Algebrite .

The Algebrite website is generated via the [constexpr.js library](https://github.com/fctorial/ConstexprJS) by [fctorial](https://github.com/fctorial/) (brief documentation [here](https://github.com/davidedc/Algebrite-website/blob/gh-pages/constexpr-library-docs.md) ).

To refresh the site for a new version:
1. `sh cleanup-generated-site.sh`
2. `cd site-generator-constexpr`
3. add the new version to the `dist` folder
4. add the new version's info to `versions-data.js`
5. you can already pre-test the version in the `site-generator-constexpr` folder
6. `sh build-static-site.sh`
7. `cd ..`
8. test the version in the `Algebrite-website-rendered` folder
9. `sh move-generated-site-into-root.sh`
10. commit 
