
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Users/airhe/Downloads/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (ratsSNPs_arl_input.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 14/03/22 at 12:51:29", "ratsSNPs_arl_input.xml#14_03_22at12_51_29"))
	insDoc(aux1, gLnk("R", "Settings", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_run_information"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "Aotea", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group0"))
		insDoc(aux2, gLnk("R", "Borneo", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group1"))
		insDoc(aux2, gLnk("R", "Doubtful_Sound", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group2"))
		insDoc(aux2, gLnk("R", "Great_Mercury_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group3"))
		insDoc(aux2, gLnk("R", "Halmahera", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group4"))
		insDoc(aux2, gLnk("R", "Hatutaa", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group5"))
		insDoc(aux2, gLnk("R", "Honuea", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group6"))
		insDoc(aux2, gLnk("R", "Kaikura_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group7"))
		insDoc(aux2, gLnk("R", "Kamaka", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group8"))
		insDoc(aux2, gLnk("R", "Kayangel", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group9"))
		insDoc(aux2, gLnk("R", "Late_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group10"))
		insDoc(aux2, gLnk("R", "Mainland", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group11"))
		insDoc(aux2, gLnk("R", "Malenge", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group12"))
		insDoc(aux2, gLnk("R", "Mohotani", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group13"))
		insDoc(aux2, gLnk("R", "Motukawanui", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group14"))
		insDoc(aux2, gLnk("R", "New_Britain", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group15"))
		insDoc(aux2, gLnk("R", "New_Guinea", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group16"))
		insDoc(aux2, gLnk("R", "Normanby_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group17"))
		insDoc(aux2, gLnk("R", "Rakiura", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group18"))
		insDoc(aux2, gLnk("R", "Reiono", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group19"))
		insDoc(aux2, gLnk("R", "Rimatuu", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group20"))
		insDoc(aux2, gLnk("R", "Slipper_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group21"))
		insDoc(aux2, gLnk("R", "Sulawesi", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group22"))
		insDoc(aux2, gLnk("R", "Tahanea", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group23"))
		insDoc(aux2, gLnk("R", "Wake_Island", "ratsSNPs_arl_input.xml#14_03_22at12_51_29_group24"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
