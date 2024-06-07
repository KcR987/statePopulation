# State Population CLI Application

This Node.js application fetches and displays state population data from the public API at [DataUSA](https://datausa.io/api/data?drilldowns=State&measures=Population). The application can be run from the command line and accepts two types of parameters:

1. `state_name` - Returns the population history for the specified state in chronological order.
2. `full_report` - Returns a list of state names and populations in descending order by population for the specified year (2013-2021 supported).

## Prerequisites

- Node.js (version 14 or higher)
- Internet connection to access the public API

## Installation

1. Clone the repository or download the `state_population.js` file to your local machine.

2. Open your terminal (Command Prompt, PowerShell, or Terminal).

3. Navigate to the directory where the `state_population.js` file is located.

4. Run the following command to ensure you have Node.js installed:
   ```bash
   node -v
   ```

5. If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/).

## Usage

To use the application, you can run it with one of the two supported parameters: `state_name` or `full_report`.

### Fetch Population History for a State

To get the population history for a specific state, use the `state_name` parameter followed by the state name. For example:

```bash
node state_population.js state_name "California"
```

### Fetch Full Report for a Specific Year

To get a full report of states' populations for a specific year, use the `full_report` parameter followed by the year. For example:

```bash
node state_population.js full_report 2020
```

### Display Usage Guidelines

If the parameters are not understood or if no parameters are provided, the program will display usage guidelines:

```bash
node state_population.js
```

### Example Outputs

#### State Population History

```bash
node state_population.js state_name "California"
```
Output:
```
Year: 2013, Population: 38332521
Year: 2014, Population: 38680834
Year: 2015, Population: 38993940
Year: 2016, Population: 39250017
Year: 2017, Population: 39536653
Year: 2018, Population: 39776830
Year: 2019, Population: 39937489
Year: 2020, Population: 40346684
Year: 2021, Population: 39538223
```

#### Full Report for a Year

```bash
node state_population.js full_report 2020
```
Output:
```
State: California, Population: 40346684
State: Texas, Population: 29145505
State: Florida, Population: 21538187
State: New York, Population: 20201249
State: Pennsylvania, Population: 13002700
...
```
