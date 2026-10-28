# Green City Dashboard Heilbronn

> **LärmLupe fork.** This fork by Team Heilbronner Lilienwind (Green City Hackathon Heilbronn 2026) adds the
> `climate-noise` tile: citizen noise measurements from LärmBox sensors on a map, per time of day, next to the WHO
> guideline values. The tile lives on branch
> [`feature/laerm-tile`](https://github.com/cahitgercekel-hub/Green-City-Dashboard/tree/feature/laerm-tile).
> Project, firmware and live dashboard: [itsmehmettaskin/greencity-hackathon-laermlupe](https://github.com/itsmehmettaskin/greencity-hackathon-laermlupe)
> · [laermlupe.de/dashboard](https://laermlupe.de/dashboard).
> Upstream: [reedu-reengineering-education/Green-City-Dashboard](https://github.com/reedu-reengineering-education/Green-City-Dashboard).

This is the Green City Dashboard Heilbronn. It provides real time information about climate, environment and mobility for the city of [Heilbronn](https://en.wikipedia.org/wiki/Heilbronn). The application displays the data using different charts and a tile-based layout. The data is sourced from various providers, including openSenseMap, Birdiary, the German Weather Service (DWD), BrightSky, and other data providers.

## Getting Started

To run the dashboard on your local machine, clone the repository (use `-b feature/laerm-tile` for the noise tile):

```bash
git clone https://github.com/cahitgercekel-hub/Green-City-Dashboard.git
cd Green-City-Dashboard
```

Install the dependencies (the project uses Yarn):

```bash
yarn install
```

Create your environment file and start the development server:

```bash
cp .env.example .env   # fill in your own values; never commit .env
yarn dev
```

You should now be able to access the application at `http://localhost:3000`. The noise tile on its own:
`http://localhost:3000/embed/climate-noise`.

### Development Workflow

1. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
2. Make your changes and ensure they adhere to the project's coding style.
3. Commit your changes using [Semantic Commit Messages](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) to ensure clear and consistent commit history.
4. Push your branch to your fork: `git push origin feature/your-feature-name`.
5. Submit a pull request to the main repository's `main` branch, including a clear description of your changes.

### License

This project is licensed under the [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) license.
