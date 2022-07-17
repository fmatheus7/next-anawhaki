const { data } await = client.query({
    query: gql`
      query {
        ceremonies {
          title
          data
          fotos {
            url
          }
        }
      }
    `,
  });


  