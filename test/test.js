var expect = chai.expect;

describe('mainAnimaUnico', function(){
    describe('getIndiceCaracteristica', function(){
        it('Debe devolver el índice correcto para cada una', function(){
            expect(getIndiceCaracteristica(AGI)).to.equal(0);
            expect(getIndiceCaracteristica(CON)).to.equal(1);
            expect(getIndiceCaracteristica(DES)).to.equal(2);
            expect(getIndiceCaracteristica(FUE)).to.equal(3);
            expect(getIndiceCaracteristica(INT)).to.equal(4);
            expect(getIndiceCaracteristica(PER)).to.equal(5);
            expect(getIndiceCaracteristica(POD)).to.equal(6);
            expect(getIndiceCaracteristica(VOL)).to.equal(7);
        });
        it('Debe lanzar ERR con otra entrada', function(){
            expect(function() {getIndiceCaracteristica("foobar")}).to.throw();
        });
    });

    describe('caracAbreviatura', function(){
        it('Debe devolver la abreviatura correspondiente', function(){
            expect(caracAbreviatura(AGI)).to.equal(AGI3);
            expect(caracAbreviatura(CON)).to.equal(CON3);
            expect(caracAbreviatura(DES)).to.equal(DES3);
            expect(caracAbreviatura(FUE)).to.equal(FUE3);
            expect(caracAbreviatura(INT)).to.equal(INT3);
            expect(caracAbreviatura(PER)).to.equal(PER3);
            expect(caracAbreviatura(POD)).to.equal(POD3);
            expect(caracAbreviatura(VOL)).to.equal(VOL3);
        });
        it('Debe lanzar ERR con otra entrada', function(){
            expect(function() {caracAbreviatura("foobar")}).to.throw();
        });
    });

    describe('getBonoPorValor', function(){
        it('Debe devolver el bono correcto, de 1 a 20', function(){
            expect(getBonoPorValor(1)).to.equal(-30);
            expect(getBonoPorValor(2)).to.equal(-20);
            expect(getBonoPorValor(3)).to.equal(-10);
            expect(getBonoPorValor(4)).to.equal(-5);
            expect(getBonoPorValor(5)).to.equal(0);
            expect(getBonoPorValor(6)).to.equal(5);
            expect(getBonoPorValor(7)).to.equal(5);
            expect(getBonoPorValor(8)).to.equal(10);
            expect(getBonoPorValor(9)).to.equal(10);
            expect(getBonoPorValor(10)).to.equal(15);
            expect(getBonoPorValor(11)).to.equal(20);
            expect(getBonoPorValor(12)).to.equal(20);
            expect(getBonoPorValor(13)).to.equal(25);
            expect(getBonoPorValor(14)).to.equal(25);
            expect(getBonoPorValor(15)).to.equal(30);
            expect(getBonoPorValor(16)).to.equal(35);
            expect(getBonoPorValor(17)).to.equal(35);
            expect(getBonoPorValor(18)).to.equal(40);
            expect(getBonoPorValor(19)).to.equal(40);
            expect(getBonoPorValor(20)).to.equal(45);
        });
        it('Debe lanzar ERR con valores superiores a 20 o inferiores a 1', function(){
            expect(function() {getBonoPorValor(0)}).to.throw();
            expect(function() {getBonoPorValor(-5)}).to.throw();
            expect(function() {getBonoPorValor(21)}).to.throw();
            expect(function() {getBonoPorValor(30)}).to.throw();
        });
    });
});