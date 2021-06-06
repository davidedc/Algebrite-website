rm -rf ../Algebrite-website-rendered/*
constexpr.js --input . --output ../Algebrite-website-rendered --entry index.html --entry docs/index.html --entry docs/latest-stable/index.html --entry docs/latest-stable/reference.html --entry sandboxes/index.html --verbose --noheadless
