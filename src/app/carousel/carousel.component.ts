import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  selectedImg: any = 0
  titles = ["Housekeeping",
    "Handyman Services",
    "Mail Services",
    "Referrals",
    "Phone a Friend",
    "Food Delivery",
    "Senior Transporation",
  ];


  constructor() { }

  ngOnInit(): void {
    window.addEventListener('load', () => {
      const carousels = document.querySelectorAll('.carousel');

      for (let i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
      }
    });

    const carousel = (root: any) => {
      var
        figure = root.querySelector('figure'),
        nav = root.querySelector('nav'),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = 'bfc' in root.dataset,

        theta = 2 * Math.PI / n,
        currImage = 0;
      this.selectedImg = 0;

      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
      window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
      });
      const setupNavigation = () => {


        const onClick = (e: any) => {
          e.stopPropagation();

          var t = e.target;
          if (t.tagName.toUpperCase() != 'BUTTON')
            return;

          if (t.classList.contains('next')) {
            currImage++;
            if (this.titles.length - 1 < currImage) {
              this.selectedImg = this.selectedImg +1
            }
            else { this.selectedImg = currImage }

          }

          else {
            currImage--;
            this.selectedImg = currImage
          }

          rotateCarousel(currImage);
        }
        nav.addEventListener('click', onClick, true);
      }

      setupNavigation();

      function setupCarousel(n: any, s: any) {
        var
          apothem = s / (2 * Math.tan(Math.PI / n));

        figure.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (var i = 0; i < n; i++)
          images[i].style.padding = `${gap}px`;
        for (i = 1; i < n; i++) {
          images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
          images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
          for (i = 0; i < n; i++)
            images[i].style.backfaceVisibility = 'hidden';

        rotateCarousel(currImage);
      }


      function rotateCarousel(imageIndex: any) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
      }

    }

  }


}

