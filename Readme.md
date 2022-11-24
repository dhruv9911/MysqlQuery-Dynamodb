mysql -u admin -p -h database-1..ap-south-1.rds.amazonaws.com < table.txt

select * from information_schema.columns where table_schema = 'PUBLIC' and table_name = '_DATA';

LOAD XML LOCAL INFILE 'data.xml' INTO TABLE test.ASSETS ROWS IDENTIFIED BY '<DATA_RECORD>';

select MAX(LENGTH(STATUS)), 'STATUS' FROM ASSETS;
