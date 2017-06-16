import { Injectable } from '@angular/core'


@Injectable()
export class PagerService{

  sizeOfPage:number= 5;
  totalPages:number = 10;
getListOfPages(currentPage:number,startPage:number=1): number[] {
  let pages:number[] = [];

  const tmp = Math.ceil(this.sizeOfPage/2);
  console.log(tmp);

  if(currentPage <= tmp) {
    for(let i=0;i<this.sizeOfPage;++i)
      pages[i]=i+1;
  } else {
    const diff = Math.abs(currentPage-pages[tmp]);
    console.log(typeof diff);
    let j=1;
    for(let i=0;i<tmp-1;i++){
      pages[i]=currentPage-j-1;
      j--;
    }
    pages[tmp-1] = currentPage;
    j=1;
    for(let i=tmp;i<this.sizeOfPage;i++)
    {
      pages[i]=currentPage+j;
      j++;
    }

  }
  console.log(pages);
  return pages;
}





}
