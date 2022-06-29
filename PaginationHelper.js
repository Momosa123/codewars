// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function  PaginationHelper (collection, itemsPerPage) {
    
      this.collection = collection,
      this.itemsPerPage = itemsPerPage,
       // returns the number of items within the entire collection
      this.itemCount = function() {
        return this.collection.length
      },
      // returns the number of pages
      this.pageCount = function() {
        return Math.ceil(this.collection.length / this.itemsPerPage)
      },
      // returns the number of items on the current page. page_index is zero based.
      // this method should return -1 for pageIndex values that are out of range
      this.pageItemCount = function(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount())
          return -1

        return pageIndex < (this.pageCount()-1) ? this.itemsPerPage : this.collection.length % itemsPerPage

      },
      // determines what page an item is on. Zero based indexes
      // this method should return -1 for itemIndex values that are out of range
      this.pageIndex = function(itemIndex) {
        if ( this.collection.length == 0 || itemIndex < 0 || itemIndex > this.collection.length)
          return -1
        return itemIndex < this.itemsPerPage ? 0 : Math.floor(itemIndex / this.itemsPerPage)
      }
     
  
 
}





const collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

const helper = new PaginationHelper(collection, 10)
console.log(collection.length)
console.log(helper.pageIndex(22))