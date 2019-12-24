# Introduction to AWS 
AWS сервисы, с которыми нужно ознакомиться: 
- Lambda, 
- DynamoDB, 
- Stepfunctions, 
- SNS,
- SQS,
- CloudWatch, 
- S3, 
- CloudFront
- CloudFormation

### Задание 1 (основное)
Реализовать архитектуру, представленную ниже:
![task](https://cdn1.savepice.ru/uploads/2019/12/19/84aa6677bc8d1edb8dcbc810f8413ced-full.png)

Данные (consents) попадают через **API Gateway** и в зависимости от **countryCode** сохраняются в соответствующих таблицах. Пример консента:
``` javascript
{
uuid: '4d329807-6387-4af7-5f6ea96d0c92',
channelType: 'SMS',
channelValue: '+375251234567',
countryCody: 'BY'
}
```
Консенты, содержащие countryCode  **«BY»**, сохраняются в таблице **country-by-test**. Консенты содержащие countryCode **«UA»** сохраняются в таблице **country-ua-test**. Запись в таблице создается с дополнительным полем **createdAt**, содержащим дату создания консента. 
Как только консент создан, на почтовые ящики должны приходить уведомления. Для этого должны быть настроены триггеры на таблицах, а так же **filterPolicy** у **SNS** topic'a. 
На email1 (любой ваш реальный email) должно приходить уведомление о создании консента в стране UA, на email2 – уведомление о создании консента в стране BY. Содержание уведомления на ваше усмотрение. 
В лямбде **global-test-createConsent** предусмотреть логирование попадаемого через API консента. 
 
### Задание 2 (дополнительное)
Написать на Node.js скрипт для загрузки данных через API Gateway. Файл с данными лежит в папке. Предусмотреть, чтобы при загрузке данных не приходили уведомления на почтовые ящики. Скрипт запускается локально.

### Задание 3 (дополнительное)
Выгрузить из **AWS CloudWatch** все логи лямбы **global-test-createConsent**. Написать на Node.js скрипт для анализа логов: необходимо подсчитать, сколько всего консентов было получено через API для страны BY и для страны UA. Скрипт запускается локально. 

**Создание аккаунта:**

* https://portal.aws.amazon.com/billing/signup#/start 

**Links:**
* https://aws.amazon.com/ru/getting-started/tutorials/run-serverless-code/
* https://serverless.com/framework/docs/providers/aws/guide/quick-start/ 
* https://serverless.com/framework/docs/providers/aws/guide/credentials/
* https://serverless.com/framework/docs/providers/aws/events/sns/
* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/


**Video:**
* https://www.youtube.com/watch?v=71cd5XerKss
* https://www.youtube.com/watch?v=4_WI8ZGIcXY
* https://www.youtube.com/watch?v=fJ5vOIzGN_Y&t=1s 
* https://www.youtube.com/watch?v=hdomGY-u5_U

**Training:**
* https://learn.epam.com/detailsPage?id=5ec83acf-3d80-481a-96fe-a90fa50498c8

**Будет БОЛЬШИМ плюсом:**
* Писать код на typesctipt'e 
* Использовать в своем тестовом проекте webpack serverless 
