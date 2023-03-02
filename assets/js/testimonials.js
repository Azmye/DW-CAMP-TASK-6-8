const testLists = document.querySelector('.testimonials-lists');
const buttonFilters = document.querySelectorAll('.btn-filters button');

class Testimonials {
  constructor(author, quote, img) {
    this.author = author;
    this.quote = quote;
    this.img = img;
  }

  templateHtml() {
    return `<div class="testimonial-item">
    <div class="container">
      <section class="head">
        <img src="${this.img}" alt="${this.author}" style="width: 100%" />
      </section>
      <section class="body">
        <p style="font-style: italic">"${this.quote}"</p>
        <h4>- ${this.author}</h4>
      </section>
    </div>
  </div>`;
  }
}

class TestiWithRating extends Testimonials {
  constructor(author, quote, img, rate) {
    super(author, quote, img);
    this.rate = rate;
  }

  getRating() {
    this.rating = '';
    for (let i = 1; i <= this.rate; i++) {
      this.rating += '<li><i class="fa-solid fa-star"></i></li>';
    }
    return this.rating;
  }

  templateHtml() {
    return `<div class="testimonial-item">
    <div class="container">
      <section class="head">
        <img src="${this.img}" alt="${this.author}" style="width: 100%" />
      </section>
      <section class="body">
        <p style="font-style: italic">"${this.quote}"</p>
        <h4>- ${this.author}</h4>
        <ul>
          ${this.getRating()}
        </ul>
      </section>
    </div>
  </div>`;
  }
}
