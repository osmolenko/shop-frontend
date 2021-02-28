const base="http://localhost:1337";

const getMainPageCategories=async (callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
              categories(limit:4) {
                id
                name
                image {
                  url
                  alternativeText
                }
              }
            }
            `
        })
    })
    let result = await response.json();
    callback(result);
}


const getAllCategories=async (callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
            categories{
              id,
            name,
            sub_categories{
              id,
              name,
              tags{
                id,
                name
              }
            }
          }}`
        })
    })
    let result = await response.json();
    callback(result);
}


//Product status can be : available, not_in_stock, on_sale
const getMainPageProducts=async (callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                products(limit: 4) {
                  id
                  status
                  name
                  article
                  images {
                    url
                    alternativeText
                  }
                }
              }
              `
        })
    })
    let result = await response.json();
    callback(result);
}

//sort options: asc, desc, ASC, DESC
const getProductsByCategory=async (category_id,sort,callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                products(
                  sort:"name:${sort}",
                  where: { 
                  tags: { 
                    sub_catalogs: {
                      categories_in:"${category_id}"
                    } 
                  } 
                }) {
                  id
                  status
                  name
                  article
                  price_option {
                    price
                    option
                  }
                  images {
                    url
                    alternativeText
                  }
                }
              }
              `
        })
    })
    let result = await response.json();
    callback(result);
}

const getProductsBySubCategory=async (sub_category_id,sort,callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                products(
                  sort:"name:${sort}",
                  where:{
                  tags:{sub_catalogs_in:"${sub_category_id}"}
                })
              {
                  id
                  status
                  name
                  article
                  price_option{
                    price,
                    option
                  }
                  images {
                    url
                    alternativeText
                  }
                }
              }
              `
        })
    })
    let result = await response.json();
    callback(result);
}

//sub_sub_category
const getProductsByTag=async (tag_id,sort,callback) => {
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                products(
                  sort:"name:${sort}",
                  where:{
                  tags_in:"${tag_id}"
                })
              {
                  id
                  status
                  name
                  article
                  price_option{
                    price,
                    option
                  }
                  images {
                    url
                    alternativeText
                  }
                }
              }
              `
        })
    })
    let result = await response.json();
    callback(result);
}

const getProductInfo=async (id,callback)=>{
    let response = await fetch(base.concat('/graphql'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                product(id: "${id}") {
                  id
                  status
                  name
                  article
                  price_option {
                    price
                    option
                  }
                  short_description
                  description
                  custom_field{
                    title
                    text
                  }
                  images {
                    url
                    alternativeText
                  }
                }
              }
              `
        })
    })
    let result = await response.json();
    callback(result);
}

//First 3 products in sub_category
const getMoreProducts=async (sub_category_id,callback) => {
  let response = await fetch(base.concat('/graphql'), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          query: `{
            products(limit: 3, where: { tags: { sub_catalogs_in: "${sub_category_id}" } }) {
              id
              name
              article
              price_option {
                price
                option
              }
              images {
                url
                alternativeText
              }
            }
          }`
      })
  })
  let result = await response.json();
  callback(result);
}
