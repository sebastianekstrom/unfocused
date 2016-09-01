.PHONY: install clean build

install:
	npm prune
	npm install

clean:
	rm -rf lib

build: clean
	npm run build
