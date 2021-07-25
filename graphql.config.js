// This file is used to configure vs code extension prisma.vscode-graphql for autocompletion etc.

module.exports = {
  schema: "http://localhost:3040/luna/graphql",
  documents: "./src/**/*.graphql",
  extensions: {
    codegen: {
      generates: {
        'src/app/generated-graphql.ts': {
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-apollo-angular'
          ]
          // namedClient as needed
          // ,
          // config: {
          //   namedClient: '[app-name]'
          // }
        }
      }
    }
  }
}
