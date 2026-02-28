# Ninja Table

This project was created to extract and generalize a dynamic table solution originally developed while volunteering on an online member directory for a non-profit organization.

The idea for this library dates back several years and was inspired by a [LinkedIn post](https://www.linkedin.com/pulse/creating-custom-angular-4-pagination-component-roshan-george-v/) I wrote at the time. Since then, I have continued refining and expanding the concept, building multiple configurable tables capable of rendering and manipulating dynamic data through a JSON-based configuration.

The goal of this project is to provide:
1. A flexible, reusable dynamic table component
2. Configuration-driven behavior via JSON
3. Clean separation between structure, data, and logic
4. A foundation that can be extended for various use cases

The commits will be sequential, and will be completed based on time availability.

## Using the library locally

Build the library and link NPM locally, run:

```bash
ng build ninja-table
cd ./dist/ninja-table
npm link
```

Open the client application consuming the library, run:

```bash
npm link ninja-table
```

This command will compile add nonja-table library to your project, and places ninja-table inside node_modules folder.

### Using the Ninja Table in the consuming Angular components

Once the library is imported, you can start using it to display data by following these steps:

1. Create a sample `config JSON` object similar to the one below:
   ```bash
   config: TableConfig = {
      columns: [
         { id: 'name', key: 'name', title: 'Name' },
         { id: 'city', key: 'address.city', title: 'City' },
         { id: 'created', key: 'createdAt', title: 'Created', type: 'datetime' }
      ],
   };
   ```

2. In the component HTMl, add Ninja Table library selector as follows:
   ```bash
   <ninja-table [rows]="rows" [config]="config"></ninja-table>
   ```