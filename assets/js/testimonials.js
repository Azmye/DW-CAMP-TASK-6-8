let testimonialsData = [];
const testLists = document.querySelector('.testimonials-lists');

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

const updateUI = (datas) => {
  testLists.innerHTML = '';
  datas.map((index, id) => {
    testLists.innerHTML += datas[id].templateHtml();
  });
};

const testimonialUser1 = new Testimonials(
  'Noctis Caelum',
  'Kings of Lucis! Come to me! This time you can Rest In Peace. Close your eyes, forevermore.',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jLAKxCnJ_wS_Hz_zs8TiwotFEFl0qbpGpg&usqp=CAU'
);
const testimonialCompany1 = new Testimonials(
  'Mr. Lambert',
  'I did it for me. I liked it. I was good at it. And, I was really…I was alive.',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ngR5IjpqcYm-eaf-HYOmkamoUZiQ_ajFw2ywNbyt_0Qk1xi3EJRSPATuu-r4__JYlsc&usqp=CAU'
);
const testimonialUser2 = new Testimonials(
  'Arthur Morgan',
  'You know, all that ever mattered to me was loyalty? It was all I knew. It was all I ever believed in',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHEvZOVCnWjVUfJ77ZEuBiWvCdD7FR8km-Fepv1t7sFF2yhH-EM4-g3ooNmuO8zXFNxM&usqp=CAU'
);

testimonialsData.push(testimonialUser1, testimonialUser2, testimonialCompany1);

updateUI(testimonialsData);
