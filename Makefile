CV_DIR = ~/drive/career/cv
INCLUDE_DIR = _includes

PDF = cv.pdf
HTML = cv.html

all: cv serve

cv:
	cd $(CV_DIR) && make all
	cp $(addprefix $(CV_DIR)/,$(PDF)) Toney_CV.pdf
	cp $(addprefix $(CV_DIR)/,$(HTML)) $(addprefix $(INCLUDE_DIR)/,$(HTML))
	cd $(CV_DIR) && make clean

serve:
	bundle exec jekyll serve --open-url --livereload
