import React, { Component } from 'react';

import { Button, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import Colors from '../constants/Colors';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>

          <FontAwesomeIcon icon={ faSortDown } style={styles.iconStyle} />
        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <View key={key} style={styles.sub_Category_Text} >

                <Text> {item.name} </Text>

              </View>
            ))
          }

        </View>
      </View>
    );
  }
}

export default class App extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      { //FRENCH PRESS
        expanded: false, category_Name: 'French Press', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~5 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text> },
          {id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.
            {'\n\n'}2. Measure out 56g (about 8 Tablespoons) of coffee and grind it as coarse as breadcrumbs.
            {'\n\n'}3. Now that your French Press is warmed up, discard the hot water and add coffee into the empty press. Start your count-up timer as soon as you add hot water. Fill it up halfway to the top saturating all the grounds, making sure that there are no dry spots.
            {'\n\n'}4. At 1:00, use a wooden spoon or spatula to break the top layer we call the crust. We prefer to use wood and not metal so you don’t accidentally crack the glass. Give it a good stir.
            {'\n\n'}5. Now, fill it all the way to the top with water. Put the top on and allow the coffee to brew without pressing it down.
            {'\n\n'}6. At 4:00, you are ready to press. Firmly push the press all the way down.
            {'\n\n'}7. Serve it up. Pour coffee into a carafe immediately to avoid over extraction. If the coffee sits on the grounds too long, it continues to extract and will become bitter. To clean the French Press, we find it easiest to add a little water to the grounds, give it a good swirl, and empty into the trash or compost bin.
          </Text>}]
      },
      { //CHEMEX
        expanded: false, category_Name: 'Chemex', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~4 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          {id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.
            {'\n\n'}2. Add 42g or about 6 Tablespoons of coffee ground kind of like Kosher salt. Center the coffee in your brewer and zero out the scale.
            {'\n\n'}. Start the timer when you add the hot water. Pour until all the grounds are saturated or until you reach about 150g. Stir with a chopstick or spoon to make sure there are no dry clumps.
            {'\n\n'}4. At :45, start the second pour, making sure to reintegrate the coffee and water. Pour with a wiggling motion, then a gentle spiral until the volume reaches about a fingertip down from the top of the rim or 450g of water. Pour over the dark spots and avoid the light ones.
            {'\n\n'}5. At 1:45, fill the brewer flush to the top or about 700g of water.
            {'\n\n'}6. At 4:00, you should be pretty close to volume. Look at the glass bubble or belly button, which indicates 20 ounces. Lift the filter. It’s okay to hover for a couple of seconds to make sure you have enough volume. Then pull the filter out completely and let it drain into the sink.
            {'\n\n'}7. Swirl the Chemex around a little and you’re ready to serve two cups of brewed coffee
          </Text> }]
      },
      { //AEROPRESS
        expanded: false, category_Name: 'AeroPress', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~5 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Measure and grind 17g of coffee — one rounded AeroPress spoonful or about 2 ½ Tablespoons. Grind the coffee about as fine as table salt.
            {'\n\n'}2. Get the AeroPress ready to brew by placing the filter in the basket. Next, preheat the brewer and rinse the filter with hot water. This gets rid of any paper flavor and warms everything up. Heat up your mug with hot water while you’re at it.
            {'\n\n'}3. Discard the rinse water from your mug. Affix the basket to the bottom of the brew chamber and place it on top of the mug. If it’s handy, use the funnel (or coffee loader) that comes with the AeroPress to add 17g of coffee. Then, remove the funnel.
            {'\n\n'}4. Start your timer when you pour hot water (just off the boil or about 205°F) into your brewer. Saturate all the grounds within 10 seconds. Pour to the No. 4 or 220g of water if you’re using a scale. Spin the chamber, making sure all the coffee is saturated.
            {'\n\n'}5. Once you hit the No. 4, stir the “slurry” (coffee and water mixture) and place the plunger on the brew chamber and pull up slightly to create a pressure seal. Don’t plunge yet!
            {'\n\n'}6. At 1:15, remove the pressure seal and give the slurry another stir with a spoon or paddle. Put the plunger back on and gently press down with steady pressure, stopping as soon as you hear a hissing sound. This entire brew process should take just under two minutes and yield seven to eight ounces of coffee.
            {'\n\n'}7. The AeroPress is easy to clean. Simply take off the basket and pop out the coffee grounds and filter. Clean the rubber plunger with hot kettle water and you’re ready for your next brew.
          </Text> }]
      },
      { //HARIO V60
        expanded: false, category_Name: 'Hario V60', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~4 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Fold the filter into a cone shape and rinse it in the Hario dripper with water just off the boil (about 205°F) to eliminate paper flavor and to heat up the mug or carafe you are brewing into. Discard the rinse water.
            {'\n\n'}2. Grind 21 grams (about 3 Tablespoons) of coffee to be about as fine as kosher salt. Add coffee to your brewer.
            {'\n\n'}3. Saturate the grounds with water right off the boil (about 205°F). Use just enough water to cover the grounds. Let it bloom for 15 seconds. Coffee de-gasses or “blooms” when it’s fresh–the coffee bed should raise up and bubble a bit.
            {'\n\n'}4. Pour water in a slow, even spiral, adding water every 10 – 15 seconds for an even extraction. Pour over the dark spots and avoid the light ones. If you're using a scale, you should pour until you reach 360 g.
            {'\n\n'}5. Once you hit 3:00, you should have about 10 oz of brewed coffee. Remove the brewer and pour the coffee into a warm mug.
           </Text>}]
      },
      { //KALITA WAVE
        expanded: false, category_Name: 'Kalita Wave', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~3 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Place and rinse the Kalita Wave filter in the dripper. This removes the paper flavor from the filter and warms everything up. Heat up your mug while you’re at it.
            {'\n\n'}2. Discard the rinse water from the carafe or mug and grind 21g (about 3 Tablespoons) of coffee as fine as table salt. Add it to the filter, making sure the bed is completely flat. Place the Kalita Wave on top of a carafe or mug. Tare your scale to zero.
            {'\n\n'}3. Saturate the dry grounds completely with 60g of hot water right off the boil (about 205°F) in the first 10 seconds and allow it to bloom. Coffee degasses or “blooms” when it’s fresh–the coffee bed should rise up and bubble a bit. Give the coffee a stir with a spoon.
            {'\n\n'}4. At :45, pour water up to 200g in a spiral motion by 1:00. The spiral motion helps give you an even extraction and keeps everything integrated.
            {'\n\n'}5. Pour small amounts (25-50g of water) periodically to hit 375g by 2:00. Submerging dark spots and avoiding light spots, slowly bring the water level to the top for an even extraction.
            {'\n\n'}6. Your brew volume should reach approximately 300ml or about to the top of a 10oz mug at 2:45 to 3:00. Remove the Wave from the carafe or mug and set it in the sink for the rest of the water to drain through.
          </Text>}]
      },
      { //SYPHON
        expanded: false, category_Name: 'Syphon', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~6 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Pull the chain of the metal filter attachment down and sink it. The clip attaches at the bottom of the funnel.
            {'\n\n'}2. Use pre-heated water to make things move a lot quicker when brewing. Make sure the outside of the globe is completely dry before you apply heat to prevent it from cracking. Fill the globe to the No. 5 mark.
            {'\n\n'}3. Vac pots usually come with a candle burner, but a butane burner (shown here) is much more effective. Turn the burner on and up high. Loosely place the funnel inside the globe so it sits at an angle while you wait for the water to boil—boil times vary.
            {'\n\n'}4. Measure out 40 grams (about 6 Tablespoons) of coffee. Grind coffee to a medium coarseness or about as fine as table salt.
            {'\n\n'}5. Once the water starts to boil, attach the top funnel securely to the globe.
            {'\n\n'}6. When the top assembly fills (you’ll want a little water remaining in the globe), create a whirlpool and add the coffee directly into the water. Start a count-up timer.
            {'\n\n'}7. Adjust your burner to lower the flame. Give the mixture a stir, immersing the coffee completely. At :40 seconds, stir it again. This second stir is more of a gentle fold, making sure everything is completely saturated.
            {'\n\n'}8. At 1:30, turn the heat off completely and give it a big swirl. Wait for the coffee to draw down through the filter into the globe, which should be finished at approximately 3:00.
            {'\n\n'}9. Place the top funnel in the black base and remove the globe from the stand. You might want to use hot pads or a kitchen towel.
           </Text>}]
      },
      { //COLD BREW
        expanded: false, category_Name: 'Cold Brew', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: 8-12 hours</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Use a ratio of 3 ounces (roughly 85 grams)  of coarsely ground coffee to 16 ounces of purified water. For example, if you use a 32oz French Press, you would use 6:32.
            {'\n\n'}2. Combine the coffee and the water together and stir, making sure all grounds are saturated.
            {'\n\n'}3. Let sit at room temperature or in the fridge (recommended) for 12-20 hours.
            {'\n\n'}4. When you've steeped for your desired time, use a thin coffee filter (like a chemex filter) and strain the coffee into different vessel for serving. Refrigerate the cold brew concentrate.
            {'\n\n'}5. When you're ready to drink, start off with a 1:1 ratio of water:cold brew. Change as your taste desires.
            {'\n\n'}6. Serve over ice and enjoy!
           </Text>}]
      },
      { // ESPRESSO MACHINE
        expanded: false, category_Name: 'Espresso Machine', sub_Category: [
          { id: 1, name: <Text style={styles.sub_Category_Text}>Total Time: ~2 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Remove the portafilter. Wipe it clean and dry out the basket. Zero out the scale and grind about 19.5g of coffee to the consistency of confectioner’s sugar directly into the portafilter. Tap it once or twice to settle it and distribute the coffee evenly with your finger. Tamp the portafilter until it feels like the coffee is pushing back. Make sure your coffee bed is level.
            {'\n\n'}2. Prep the machine by purging water through the grouphead to make sure everything is hot, then lock the portafilter into place.
            {'\n\n'}3. Pull the shot by engaging the grouphead and start the timer. Place a cup under portafilter and watch the espresso for a steady stream that should look like little mouse tails. The entire extraction should take about 23-28 seconds to brew about 1.5 ounces of espresso. If it takes too much longer or is pulling too slowly, try a coarser grind. If it brews too quickly, try a finer grind.
            {'\n\n'}4. Serve and enjoy
           </Text> }]
      },
      { //MOKA POT
        expanded: false, category_Name: 'Moka Pot', sub_Category: [
          { id: 2, name: <Text style={styles.sub_Category_Text}>Total Time: ~6 minutes</Text>},
          { id: 2, name: <Text style={styles.sub_Category_Text}>Directions:</Text>},
          { id: 3, name: <Text style={styles.sub_Category_Body}>
            1. Bring kettle water to a boil and remove from heat. Do this to keep the temperature of the moka pot from getting too hot and cooking the coffee, imparting a metallic taste.
            {'\n\n'}2. Grind your coffee on a drip coffee setting, about as fine as table salt. You need enough coffee to fill the filter basket, which is about 15 to 17 grams (or about 2.5 Tablespoons) for a 4-cup Mokapot.
            {'\n\n'}3. Add the heated water and fill to the line in the bottom of the brewer, or just up to the screw on the outside.
            {'\n\n'}4. Insert the filter basket into the brewer bottom.
            {'\n\n'}5. Fill the basket with coffee, slightly mounded, and level the surface off with your finger. Brush away loose grounds on the top edge of the filter basket.
            {'\n\n'}6. Screw the top and bottom together. Use hot pads and don’t over tighten.
            {'\n\n'}7. Put the brewer on the stove, use moderate heat and make sure that the handle is not subjected to heat. Leave the top lid open.
            {'\n\n'}8. The coffee will begin to come out and you will hear a puffing sound and see a rich-brown stream that will get progressively lighter in color. Once the stream is the color of yellow honey, remove from heat source with hot pads and close the lid.
            {'\n\n'}9. Wrap the bottom of the pot in a chilled bar towel or run under cold tap water to stop extraction. We do this to prevent the coffee from developing a metallic taste. The idea here is to get a relatively small amount of coffee which is very concentrated and rich.
            {'\n\n'}10. As soon as the coffee stops bubbling out, pour it into cups or a carafe. You may wish to dilute with hot water depending on preference.
            {'\n\n'}11. Enjoy!
           </Text> }]
      }
    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>


        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: Colors.mandy,
  },

  iconStyle: {
    width: 15,
    height: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 15,
    color: Colors.spanishWhite,
  },

  sub_Category_Text: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: Colors.spanishWhite,
    padding: 5,
    backgroundColor: Colors.santeFe,
    fontWeight: "bold",
  },

  sub_Category_Body: {
    fontSize: 13,
    fontFamily: 'Arial',
    color: Colors.spanishWhite,
    padding: 10,
    backgroundColor: Colors.santeFe,
  },

  category_Text: {
    textAlign: 'left',
    color: Colors.spanishWhite,
    fontSize: 35,
    fontFamily: 'knockout46',
    letterSpacing: 1,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.santeFe
  },


});
