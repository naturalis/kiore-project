This folder contains R scripts used to clean the data and run analyses.

1. Data_cleanup.Rmd: To make the raw data ready for analysis I...  
	- Removed SNP columns which had no variation (invariant/monomorphic)  
	- Removed SNP columns with more than 60% missing values  
	- Removed specimen rows with more than 56% missing values (leaving a dataset 
	  which was/is at least 90% complete)  
2. Data_review.Rmd
	- Prepped an input file for PGDSpider (a file conversion programme)  
	- Read the Arlequin Hardy-Weinburg Equilibrium (HWE) analysis output files  
	- Checked the HWE p-values and ran a Bonferroni test  
	- Removed samples with issues identified by the HWE analysis  
	- Double checked for monomorphic SNP columns
2. NeighborNet_Treebuilding.Rmd: Created a file to open in SplitsTree, 
   in order to generate a NeighborNet network and export a genetic distance 
   matrix.
3. Mantel_test.Rmd: Generated a geographical distance matrix of 
   distances between all islands where Pacific rats were sampled. Loaded the 
   genetic distance matrix produced in SplitsTree and then used both matrices 
   to run a Mantel test.
4. Heterozygosity_test.Rmd: 