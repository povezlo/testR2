# Book App
Реализовал на Angular 10.1.3 главную страницу онлайн-библиотеки под десктоп и мобильные

## Требования:
Необходимо реализовать на Angular 10 главную страницу онлайн-библиотеки под десктоп и мобильные. На телефонах все блоки, кроме карусели, будут занимать всю ширину экрана, отступ от краев = 16 рх. В галерее на телефоне по ширине должно помещаться две квадратных карточки, достаточно показывать только превью книги на весь размер, без названия. Изображения всегда идут после текста.
Все изображения можно брать из гугла случайным образом.
Иконки - Google Material Icons - Outline.

Анимации:

Все кнопки при ховере должны менять свой цвет и становиться полностью залитыми (по дефолту они имеют прозрачность) с белым текстом или иконкой.







Ссылки в футере при ховере подчеркиваются однопиксельной красной полосой с прозрачностью 60%.







При ховере на пункты меню, они должны становиться красными. Клик по иконке поиска - поле ввода раскрывается на всю ширину хедера, а иконка поиска меняется на крестик. На телефоне меню раскрывается на весь экран с большими ссылками (48 рх), отбитыми по левому краю.







Превью видео при ховере должно смещаться на 6 рх вниз и вправо, а тень в два раза меньше по всем параметрам, кроме насыщенности. При наведении на кнопку проигрывания ее белая часть и иконка треугольника должны увеличиваться до границы полупрозрачного контура (его тоже делать, но он статичен).






## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
