<?php
require_once("../../../../../config.php");

if ($CFG->version<2013111800)
{
 /**Moodle 2.5 or lower, send the colour icon**/
 echo $CFG->wwwroot."/lib/editor/tinymce/plugins/helixmedia/tinymce/img/helix_colour.gif";
}
else
{
 /**Moodle 2.6 or greater, send the grey icon**/
 echo $CFG->wwwroot."/lib/editor/tinymce/plugins/helixmedia/tinymce/img/helix_grey.gif";
}

?>