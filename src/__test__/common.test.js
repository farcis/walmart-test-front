import React from 'react';
import QueryInfo from '../components/QueryInfo';
import { render } from '@testing-library/react';
import NavInput from '../components/NavInput';
import Products from '../components/Products';
import Search from '../components/Search';

const item = [{"id":1,"brand":"ooy eqrceli","description":"rlñlw brhrka","image":"www.lider.cl/catalogo/images/whiteLineIcon.svg","price":498724,"discount":0.0,"finalPrice":0}]

describe('components testing', () => {

  it("NavInput component is rendering OK", () => {
    const { container } = render(<NavInput search="uno" setSearch={() => "dos"} setQuery={() => "tres"}/>);
    expect(container).toBeDefined();
    expect(container.outerHTML).toBe('<div><nav class=\"container navbar justify-content-center\" id=\"searcher\"><form data-testid=\"formsubmit\" class=\"form-inline\"><input data-testid=\"searchbox\" class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"></form></nav></div>');
  })

  it("Products component is rendering OK", () => {
    const { container } = render(<Products result={item}/>);
    expect(container).toBeDefined();
    expect(container.outerHTML).toBe('<div><div class=\"card\"><img src=\"http://www.lider.cl/catalogo/images/whiteLineIcon.svg\" class=\"card-img-top rounded\"><div class=\"card-body\"><h4 class=\"card-title\"><strong>ooy eqrceli</strong> <span class=\"description\">rlñlw brhrka</span></h4><p class=\"card-text\">$498724<span></span></p><a href=\"#\" class=\"btn btn-primary\">Agregar</a></div></div></div>');
  })

  it("QueryInfo component is rendering OK", () => {
    const { container } = render(<QueryInfo query="uno"/>);
    expect(container).toBeDefined();
    expect(container.outerHTML).toBe('<div><div class=\"container\"><p id=\"info\">Resultados para: <strong>uno</strong></p></div></div>');
  })

  it("Search component is rendering OK", () => {
    const { container } = render(<Search />);
    expect(container).toBeDefined();
    expect(container.outerHTML).toBe('<div><nav class=\"container navbar justify-content-center\" id=\"searcher\"><form data-testid=\"formsubmit\" class=\"form-inline\"><input data-testid=\"searchbox\" class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"></form></nav><div class=\"container\"><p id=\"info\">Resultados para: <strong></strong></p></div><section class=\"container py-5\" id=\"itemList\"><div class=\"row justify-content-center\"></div></section></div>');
  })

});