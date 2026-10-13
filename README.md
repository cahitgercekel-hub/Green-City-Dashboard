# Green City Dashboard Heilbronn

This is the Green City Dashboard Heilbronn. It provides real time information about climate, environment and mobility for the city of [Heilbronn](https://en.wikipedia.org/wiki/Heilbronn). The application displays the data using different charts and a tile-based layout. The data is sourced from various providers, including openSenseMap, Birdiary, the German Weather Service (DWD), BrightSky, and other data providers.

## Getting Started

To run the Klimadashboard application on your local machine, first clone the repository:

> > > git clone https://github.com/your-username/klimadashboard.git
> > > cd klimadashboard

Then, install the dependencies:

> > > npm install
> > >
> > > # or
> > >
> > > yarn install

Finally, start the development server:

> > > npm run dev
> > >
> > > # or
> > >
> > > yarn dev

You should now be able to access the application at `http://localhost:3000`.

## Features

The Klimadashboard web application provides the following features:

- **Data visualization:** The application visualizes open smart city data for the city of Heilbronn using different charts, including bar charts, line charts, and scatter plots. The charts are interactive and allow users to filter the data by different criteria.

- **Tile-based layout:** The application uses a tile-based layout grouped into sections. The tiles display key indicators for each section and provide a quick overview of the data.

- **Real-time data:** The data in the Klimadashboard application is updated in real-time, providing users with the latest information on climate and environmental indicators in the city of Heilbronn.

- **Responsive design:** The application is designed to be responsive, adapting to different screen sizes and devices.

- **Data sources:** The data in the Klimadashboard application is sourced from various providers, including openSenseMap, Birdiary, the German Weather Service (DWD), BrightSky, and other data providers.

- **Built with Next.js:** Klimadashboard is built using Next.js 13 with an app directory.

- **Styling with TailwindCSS:** The application uses TailwindCSS for styling, making it easy to customize the look and feel of the application.

- **UI components with Radix UI:** The application uses Radix UI components for a consistent and accessible user interface.

- **Data visualization with Apache ECharts:** The application uses Apache ECharts for data visualization, providing a powerful and flexible charting library.

## Data Sources

The data in the Klimadashboard application is sourced from various providers, including:

- **openSenseMap:** senseBox measuring stations in Heilbronn provide temperature, particulate matter and other environmental data.

- **Birdiary:** Birdiary stations provide bird observations.

- **atrai.bike / Eco-Counter:** Bicycle traffic, overtaking distances and traffic flow data.

- **German Weather Service (DWD):** The DWD provides weather data for Germany, including temperature, precipitation, and wind.

- **BrightSky:** BrightSky provides air quality data for cities around the world.

- **Other data providers:** The Klimadashboard application may also source data from other providers as needed.

## Contributing

Thank you for considering contributing to this project! We appreciate your help in making it better.

### Development Workflow

1. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
2. Make your changes and ensure they adhere to the project's coding style.
3. Commit your changes using [Semantic Commit Messages](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) to ensure clear and consistent commit history.
4. Push your branch to your forked repository: `git push origin feature/your-feature-name`.
5. Submit a pull request to the main repository's `main` branch, including a clear description of your changes.

### License

This project is licensed under the [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) license.
