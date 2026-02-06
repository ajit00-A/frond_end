function person(Bmw, Black, M5,) {
    this.Brand = Bmw;
    this.colour = Black;
    this.model = M5;
    this.discription = function () {
        return this.Brand + "colour" + this.colour + "model" + this.model

    };
}
alert(person.Brand);
alert(person.colour);
alert(person.model);


