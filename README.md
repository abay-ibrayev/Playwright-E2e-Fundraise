<h3 align="center">Fundraise Up Interview Task Project</h3>

---


### Prerequisites

pre install nodejs + npm\yarn please (latest stable version)


### Installing

```
 npm install
```

### 🔧 Running the tests

Easiest way to run autotests:

```
 npx playwright install
 npx playwright test 
```

To Run using a more complex way on specific browser/device (available configuration placed in *playwright.config.ts* file)

```
  npx playwright test --project={projectName} --HOST={env_url}
```

P.S. Not gonna provide here all explanation for CLI test execution, in this doc added only simple configuration (I'm able to make it more complex & flexible for CI/CD pipeline)


Also u can use docker and run all tests in docker container

```
docker build -t fundraise-playwright .
docker run -it --rm -e HOST=https://data.fundraiseup.com/ --name fundraise fundraise-playwright
```

### Show Report after running the tests (Allure)

Build allure report 

```
  allure generate allure-results -o allure-report --clean
```

Show allure report

```
  allure open allure-report
```

### Break down into end to end tests

In project u can find: 
- Functional tests 
- Visual Regression tests
- Performance tests (using lighthouse)
- API tests
- Allure Report



### TODO: 

- Add Wiremock with Record & Playback feature (to provide mock functional tests)
- Add Jest for white-box testing (unit + component testing) if will have tests in main repo)
- Add Integration with Testrail (https://github.com/microsoft/playwright/issues/12879)
- Add Aliases for import via @fixtures or @pages
- Add linter (ESLint) 
- Add husky for pre-commit hooks (prettier + lint + some tests may be)
- Customize Github Actions\Reporters for CI/CD Pipeline configuration
- Customize Test Framework for current/desired Dev/QA processes in company (*MAKE AUTOTESTS usefull for the team*)

