import pandas

#import the selected csv file here
#Note: Only need to change the selected file/filepath to change files
df = pandas.read_csv('example.csv',
            header=0,
            names=['User Id', 'Name', 'Version', 'Company'])
#Split First and Last name into two separate columns (only add additional columns)
df[['First','Last']] = df.Name.str.split(expand=True)
#print("\n After adding two new columns : \n", df)

#Sort by "User Id", "Company", and "Version" then drop all rows 
df = df.sort_values(by=['User Id','Company','Version'])
df = df.drop_duplicates(subset=['User Id','Company'], keep='last')

df = df.sort_values(by=['Company', 'Last', 'First'])
#Get rid of extra "First" and "Last" columns
df = df.drop(columns=['First','Last'],axis=1)

#Make a dictionary of unique companies
d = dict(tuple(df.groupby('Company')))
#Get the keys of the dictionary. These should be company names.
keys = list(d.keys())

#make csv files for each of the companies in the DataFrame Dictionary
for each in keys:
    data_i = d[each]
    data_i.to_csv(each + '.csv')