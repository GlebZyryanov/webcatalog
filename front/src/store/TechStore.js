import { makeAutoObservable } from "mobx";

export default class TechStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._bases = [];
    this._teches = [];
    this._selectedType = {};
    this._selectedTeches = {};
    this._selectedBrand = {};
    this._selectedBase = {};
    this._page = 1; // текущая страница
    this._totalCount = 0; // общее количество элементов
    this._limit = 3; // количество элементов на странице
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setTeches(teches) {
    this._teches = teches;
  }
  setBases(bases) {
    this._bases = bases;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setSelectedBase(base) {
    this._selectedBase = base;
  }
  setSelectedTeches(teches) {
    this._selectedTeches = teches;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get teches() {
    return this._teches;
  }

  get bases() {
    return this._bases;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedBase() {
    return this._selectedBase;
  }
  get selectedTeches() {
    return this._selectedTeches;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
