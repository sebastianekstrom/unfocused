.PHONY: install clean build serve

install:
	npm prune
	npm install

clean:
	rm -rf lib
	rm -rf build

serve:
	coffee -o lib -cw src

build: clean
	coffee -o lib -c src
