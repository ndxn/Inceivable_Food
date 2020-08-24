# Belly Button Diversity Dashboard for Inconceivable Foods
## Purpose and Objectives
The Belly Button Diversity Dashboard is a tool that allowes reserachers to share data about participants. While the data is anonymized and, thus, permissible to share publicly, anonylmization is not part of the program's functionality. Users may select the anonymous ID of participants and the information regarding their belly button flora is accessed, filtered, and presented grapically in a dynamic webpage.

## Technologies Used

This project employs primarily HTML and JavaScript, each language having its share of additional tools that either increase the functionality of the site, improve usability, or both. The index.html page calls D3 and Plotly Libraries. D3 provides the page with interactive elements that work with JavaScript. User inputs are listened for by D3 and passed into the plots.js script, where the inputs are passed into various functions.

Data is provided to the dashboard as a JSON file. When the HTML page is loaded, the HTML drop-down menu dynamically populates with the entries from the data file. 
Event handling on the drop-down menu means that user inputs can be received and processed on the back-end with results displated on the main page. The user inputs are fed into the plots.js script, which accesses the data file, samples.json, and retrievs the appropriate data. The data is stored as variables that are used by plotly to create descriptive charts for the users. 

Benefits of this system are that new data may be added and the tool will still be responsive. Furthermore, data need not be stored in the HTML file, meaning that data may also be removed, redacted, or cleaned up without risking the itegrity of the webpage.

## Further Development and Followup

Further development of this concept could be made at all levels of this app. Variations on the user input would be particuarly helpful if the sample size grows considersably. Instead of a dropdown menu, users could input ID numbers.

The HTML webpage is very basic. The incorporation of additional Bootstraps elements along with CSS could make the page appear more attractive to users but, for now, the functionality is present. 

Additional analysis could compile data for analysis by factors. Attributes, such as sex, age, or location (by pre-defined areas), or any combination thereof, could be selected by users and the data matching the attributes called, merged, filtered, and displated. Deployment of this feature could inform users who are interested in identifying trends in the commonality of bacteria type.

A gauge that visually represents the frequency of a participants navel washing would be fun addition. This feature will be incorporated in the future.
