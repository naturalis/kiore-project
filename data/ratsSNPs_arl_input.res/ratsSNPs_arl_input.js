
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Users/airhe/Downloads/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (ratsSNPs_arl_input.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/03/22 at 17:07:15", "ratsSNPs_arl_input.xml#28_03_22at17_07_15"))
	insDoc(aux1, gLnk("R", "Settings", "ratsSNPs_arl_input.xml#28_03_22at17_07_15_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "ratsSNPs_arl_input.xml#28_03_22at17_07_15_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "ratsSNPs_arl_input.xml#28_03_22at17_07_15_pop_pairw_diff"))
