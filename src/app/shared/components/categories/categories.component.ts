import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  itemsToShow = 12;
    showViewMore = true;
  category=
    {
      Label:"Our categories",
      subtitle: 'Freshest meats and much more!',
      fields:[
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },
        {
          name:'Ready to cook',
          image:'https://assets.licious.in/OMS-Category/6900b1b4-c40d-9d68-fd8a-88a553dcdaf2/original/1714038083760.png'
        },
        {
          name:'Fish & sea food',
          image:'https://assets.licious.in/OMS-Category/e19b032c-78c1-1a25-1cdc-134543e8e6bc/original/1715753753100.png'
        },
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },
        {
          name:'Ready to cook',
          image:'https://assets.licious.in/OMS-Category/6900b1b4-c40d-9d68-fd8a-88a553dcdaf2/original/1714038083760.png'
        },
        {
          name:'Fish & sea food',
          image:'https://assets.licious.in/OMS-Category/e19b032c-78c1-1a25-1cdc-134543e8e6bc/original/1715753753100.png'
        },
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },  {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },
        {
          name:'Ready to cook',
          image:'https://assets.licious.in/OMS-Category/6900b1b4-c40d-9d68-fd8a-88a553dcdaf2/original/1714038083760.png'
        },
        {
          name:'Fish & sea food',
          image:'https://assets.licious.in/OMS-Category/e19b032c-78c1-1a25-1cdc-134543e8e6bc/original/1715753753100.png'
        },
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },
        
        {
          name:'Ready to cook',
          image:'https://assets.licious.in/OMS-Category/6900b1b4-c40d-9d68-fd8a-88a553dcdaf2/original/1714038083760.png'
        },
        {
          name:'Fish & sea food',
          image:'https://assets.licious.in/OMS-Category/e19b032c-78c1-1a25-1cdc-134543e8e6bc/original/1715753753100.png'
        },
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },     {
          name:'Ready to cook',
          image:'https://assets.licious.in/OMS-Category/6900b1b4-c40d-9d68-fd8a-88a553dcdaf2/original/1714038083760.png'
        },
        {
          name:'Fish & sea food',
          image:'https://assets.licious.in/OMS-Category/e19b032c-78c1-1a25-1cdc-134543e8e6bc/original/1715753753100.png'
        },
        {
          name:'Chicken',
          image:'https://assets.licious.in/OMS-Category/0e3d6b1a-fb36-f434-43e1-1e8f5afb7074/original/1705579441855.png'
        },
      ]
    }
    
  
  
    // Method to load more items
    viewMore() {
      this.itemsToShow = this.category.fields.length;
      this.showViewMore = false; // Hide "View More" when all items are shown
    }
  constructor(){

  }
  ngOnInit (){

}
}
