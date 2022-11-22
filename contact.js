class MemberData {
  constructor() {
    this._mData;
    this._total;
  }

  set mData(data) {
    this._mData = data;
  }

  get mData() {
    return this._mData;
  }

  createRow(_name, _sex, _nohp, _address) {
    let tmp = { name: _name, sex: _sex, nohp: _nohp, address:_address };
    return tmp;
  }

  saveData(inputName, inputSex, inputNoHp, inputAddress) {
    
    let row = this.createRow(inputName, inputSex, inputNoHp, inputAddress);
    this.mData.push(row);
    
    localStorage.setItem("member", JSON.stringify(this.mData));
  }

  getDataByIndex(index) {
    let tmp = this.mData[index];
    return tmp;
  }

  editDataByIndex(_name, _sex, _nohp, _address, _index) {
    this.mData[_index].name = _name;
    this.mData[_index].sex = _sex;
    this.mData[_index].nohp = _nohp;
    this.mData[_index].address = _address;
    
    localStorage.setItem("member", this.mData);
  }

  deleteDataByIndex(_index) {
    this.mData.splice(_index, 1);
    localStorage.setItem("member", this.mData);
  }

  init() {
    this.mData = [];
    localStorage.setItem("member", JSON.stringify(this.mData));
    if (localStorage.getItem("member") != null) {
      this.mData = JSON.parse(localStorage.getItem("member"));
    }
  }
}
